let allOpportunities = [];
let filtered = [];
let activeFilters = { source: 'all', category: 'all', status: 'all', search: '' };

// Source → badge class mapping
const sourceClass = {
  'EIC': 'badge-eic',
  'EU Funding Portal': 'badge-horizon',
  'Cascade': 'badge-cascade',
  'Slovak': 'badge-slovak',
};

function getBadgeClass(source) {
  return sourceClass[source] || 'badge-other';
}

function daysUntil(dateStr) {
  const diff = new Date(dateStr) - new Date();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function loadData() {
  const data = window.RADAR_DATA;
  if (!data) {
    document.getElementById('cards-grid').innerHTML =
      '<div class="empty-state"><div class="icon">⚠️</div><h3>Could not load data</h3><p>Make sure data/data.js is present next to index.html</p></div>';
    return;
  }
  allOpportunities = data.opportunities.map(o => ({
    ...o,
    closing_soon: daysUntil(o.deadline) <= 30 && daysUntil(o.deadline) > 0
  }));
  document.getElementById('last-updated').textContent =
    'Updated: ' + new Date(data.last_updated).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  applyFilters();
  updateStats();
  showNewNotifications();
}

function updateStats() {
  const open = allOpportunities.filter(o => o.status === 'open').length;
  const isNew = allOpportunities.filter(o => o.is_new).length;
  const closing = allOpportunities.filter(o => o.closing_soon).length;

  document.getElementById('stat-open').textContent = open;
  document.getElementById('stat-new').textContent = isNew;
  document.getElementById('stat-closing').textContent = closing;
  document.getElementById('stat-total').textContent = allOpportunities.length;

  // Update filter counts
  const counts = { all: allOpportunities.length };
  allOpportunities.forEach(o => {
    counts[o.source] = (counts[o.source] || 0) + 1;
  });
  document.querySelectorAll('[data-count-source]').forEach(el => {
    const src = el.getAttribute('data-count-source');
    el.textContent = counts[src] || 0;
  });
}

function applyFilters() {
  filtered = allOpportunities.filter(o => {
    if (activeFilters.source !== 'all' && o.source !== activeFilters.source) return false;
    if (activeFilters.category !== 'all' && !o.category.includes(activeFilters.category)) return false;
    if (activeFilters.status === 'new' && !o.is_new) return false;
    if (activeFilters.status === 'closing' && !o.closing_soon) return false;
    if (activeFilters.search) {
      const q = activeFilters.search.toLowerCase();
      if (!o.title.toLowerCase().includes(q) &&
          !o.description.toLowerCase().includes(q) &&
          !o.tags.join(' ').toLowerCase().includes(q)) return false;
    }
    return true;
  });

  // Sort: new first, then closing soon, then by deadline
  filtered.sort((a, b) => {
    if (a.is_new && !b.is_new) return -1;
    if (!a.is_new && b.is_new) return 1;
    if (a.closing_soon && !b.closing_soon) return -1;
    if (!a.closing_soon && b.closing_soon) return 1;
    return new Date(a.deadline) - new Date(b.deadline);
  });

  renderCards();
  document.getElementById('results-count').textContent = `${filtered.length} opportunities`;
}

function renderCards() {
  const grid = document.getElementById('cards-grid');
  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state"><div class="icon">🔍</div><h3>No results</h3><p>Try adjusting your filters or search query.</p></div>';
    return;
  }

  grid.innerHTML = filtered.map(o => {
    const days = daysUntil(o.deadline);
    const deadlineClass = days <= 30 ? 'urgent' : 'ok';
    const deadlineText = days <= 0 ? 'Closed' : days === 1 ? '1 day left' : `${days} days left`;

    return `
    <div class="card ${o.closing_soon ? 'closing-soon' : ''} ${o.is_new ? 'is-new' : ''}" data-id="${o.id.replace(/"/g, '&quot;')}">
      <div class="card-top">
        <div>
          <span class="card-source-badge ${getBadgeClass(o.source)}">${o.source}</span>
        </div>
        <div class="card-badges">
          ${o.is_new ? '<span class="badge-new">NEW</span>' : ''}
          ${o.closing_soon ? '<span class="badge-closing">⏰ Closing soon</span>' : ''}
        </div>
      </div>

      <div>
        <div class="card-title">${o.title}</div>
        <div class="card-programme">${o.programme}</div>
      </div>

      <div class="card-description">${o.description}</div>

      <div class="card-meta">
        <div class="meta-item">💰 <strong>${o.budget}</strong></div>
        <div class="meta-item">📅 Deadline: <strong>${formatDate(o.deadline)}</strong></div>
      </div>

      <div class="card-tags">
        ${o.category.map(c => `<span class="tag">${c}</span>`).join('')}
        ${o.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>

      <div class="card-footer">
        <span class="deadline-text ${deadlineClass}">${deadlineText}</span>
        <a class="open-btn" href="${o.url}" target="_blank" onclick="event.stopPropagation()">Open call ↗</a>
      </div>
    </div>`;
  }).join('');
}

function openModal(id) {
  const o = allOpportunities.find(x => x.id === id);
  if (!o) return;

  const days = daysUntil(o.deadline);
  const modal = document.getElementById('modal');

  modal.innerHTML = `
    <div class="modal-header">
      <div>
        <span class="card-source-badge ${getBadgeClass(o.source)}" style="margin-bottom:8px;display:inline-block">${o.source}</span>
        <div class="modal-title">${o.title}</div>
        <div class="modal-programme">${o.programme}</div>
      </div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>

    <div style="display:flex;gap:8px;flex-wrap:wrap">
      ${o.is_new ? '<span class="badge-new">NEW</span>' : ''}
      ${o.closing_soon ? '<span class="badge-closing">⏰ Closing soon</span>' : ''}
      ${o.category.map(c => `<span class="tag">${c}</span>`).join('')}
      ${o.tags.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>

    <div class="modal-grid">
      <div class="modal-meta-item">
        <div class="label">Budget</div>
        <div class="value">${o.budget}</div>
      </div>
      <div class="modal-meta-item">
        <div class="label">Deadline</div>
        <div class="value ${days <= 30 ? 'urgent' : ''}" style="${days <= 30 ? 'color:var(--yellow)' : 'color:var(--green)'}">${formatDate(o.deadline)} (${days}d)</div>
      </div>
      <div class="modal-meta-item">
        <div class="label">Opens</div>
        <div class="value">${formatDate(o.open_date)}</div>
      </div>
      <div class="modal-meta-item">
        <div class="label">Status</div>
        <div class="value" style="color:var(--green);text-transform:capitalize">${o.status}</div>
      </div>
    </div>

    <div class="modal-section">
      <h4>Description</h4>
      <p>${o.description}</p>
    </div>

    <div class="modal-footer">
      <a class="btn-primary" href="${o.url}" target="_blank">Open call page ↗</a>
      <button class="btn-secondary" onclick="closeModal()">Close</button>
    </div>
  `;

  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 5000);
}

function showNewNotifications() {
  const newCalls = allOpportunities.filter(o => o.is_new);
  const closing = allOpportunities.filter(o => o.closing_soon);

  if (newCalls.length > 0) {
    setTimeout(() => showToast(`🟢 ${newCalls.length} new call${newCalls.length > 1 ? 's' : ''} found since last check`, 'success'), 500);
  }
  if (closing.length > 0) {
    setTimeout(() => showToast(`⏰ ${closing.length} call${closing.length > 1 ? 's' : ''} closing within 30 days`, 'warning'), 1200);
  }
}

// Filter controls
function setSourceFilter(source) {
  activeFilters.source = source;
  document.querySelectorAll('[data-source-filter]').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-source-filter') === source);
  });
  applyFilters();
}

function setCategoryFilter(cat) {
  activeFilters.category = cat;
  document.querySelectorAll('[data-cat-filter]').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-cat-filter') === cat);
  });
  applyFilters();
}

function setStatusFilter(status) {
  activeFilters.status = status;
  document.querySelectorAll('[data-status-filter]').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-status-filter') === status);
  });
  applyFilters();
}

function clearFilters() {
  activeFilters = { source: 'all', category: 'all', status: 'all', search: '' };
  document.getElementById('search-input').value = '';
  document.querySelectorAll('.filter-chip').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('[data-source-filter="all"], [data-cat-filter="all"], [data-status-filter="all"]')
    .forEach(el => el.classList.add('active'));
  applyFilters();
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('search-input').addEventListener('input', e => {
    activeFilters.search = e.target.value;
    applyFilters();
  });

  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target.id === 'modal-overlay') closeModal();
  });

  document.getElementById('cards-grid').addEventListener('click', e => {
    const card = e.target.closest('.card[data-id]');
    if (card && !e.target.closest('a')) openModal(card.dataset.id);
  });

  loadData();
});
