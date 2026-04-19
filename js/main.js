// Elements
const hamburger = document.getElementById('hamburger');
const sidebar   = document.getElementById('sidebar');
const overlay   = document.getElementById('overlay');
const mainEl    = document.getElementById('main');

function isMobile() { return window.innerWidth <= 768; }

// Sidebar toggle
function toggleSidebar() {
  if (isMobile()) {
    const isOpen = sidebar.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    overlay.classList.toggle('visible', isOpen);
  } else {
    const isCollapsed = sidebar.classList.toggle('collapsed');
    hamburger.classList.toggle('open', isCollapsed);
    mainEl.classList.toggle('collapsed', isCollapsed);
  }
}

function closeSidebar() {
  sidebar.classList.remove('open');
  hamburger.classList.remove('open');
  overlay.classList.remove('visible');
}

hamburger.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', closeSidebar);

window.addEventListener('resize', () => {
  if (!isMobile()) {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
  }
});

// Nav links - only prevent default on # links, let real hrefs navigate
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    if (isMobile()) closeSidebar();
  });
});

// Sport tabs
document.querySelectorAll('.sport-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.sport-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Odds buttons
document.querySelectorAll('.match-card').forEach(card => {
  card.querySelectorAll('.odd').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      card.querySelectorAll('.odd').forEach(s => s.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });
});

// Ticker
const wins = [
  { user: 'williamnillson', game: 'Gates of Olympus', mult: '247.80x', amt: '$12,390', big: true  },
  { user: 'bin',            game: 'Sweet Bonanza',    mult: '88.50x',  amt: '$4,425',  big: false },
  { user: 'tirgib',         game: 'Reactoonz',        mult: '312.10x', amt: '$3,121',  big: true  },
];

function renderTicker() {
  const ticker = document.getElementById('ticker');
  if (!ticker) return;
  wins.forEach(w => {
    const row = document.createElement('div');
    row.className = 'ticker-row' + (w.big ? ' big' : '');
    row.innerHTML = `
      <span class="ticker-user">${w.user}</span>
      <span class="ticker-game">${w.game}</span>
      <span class="ticker-mult">${w.mult}</span>
      <span class="ticker-amt">${w.amt}</span>
    `;
    ticker.appendChild(row);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTicker();
});
