document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);

  themeToggle?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  document.getElementById('menuToggle')?.addEventListener('click', () => {
    document.querySelector('.sidebar')?.classList.toggle('open');
  });

  document.getElementById('notifToggle')?.addEventListener('click', () => {
    document.getElementById('notificationsPanel')?.classList.toggle('open');
  });

  document.getElementById('closeNotif')?.addEventListener('click', () => {
    document.getElementById('notificationsPanel')?.classList.remove('open');
  });

  if (window.Chart) {
    const line = document.getElementById('lineChart');
    const bar = document.getElementById('barChart');
    const pie = document.getElementById('pieChart');

    if (line) new Chart(line, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{ label: 'Admissions', data: [90, 120, 160, 140, 190, 220], borderColor: '#4f46e5', fill: true, backgroundColor: 'rgba(79,70,229,.16)', tension: .42 }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });

    if (bar) new Chart(bar, {
      type: 'bar',
      data: {
        labels: ['Science', 'Arts', 'Commerce', 'Engineering'],
        datasets: [{ label: 'Students', data: [420, 350, 280, 510], backgroundColor: ['#4f46e5', '#0ea5e9', '#22c55e', '#f59e0b'] }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });

    if (pie) new Chart(pie, {
      type: 'pie',
      data: {
        labels: ['Present', 'Absent', 'Late'],
        datasets: [{ data: [78, 16, 6], backgroundColor: ['#22c55e', '#ef4444', '#f59e0b'] }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  }
});
