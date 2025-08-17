export function logEvent(type, details = {}) {
  try {
    const events = JSON.parse(localStorage.getItem('auditEvents') || '[]');
    events.push({ type, details, at: new Date().toISOString() });
    localStorage.setItem('auditEvents', JSON.stringify(events));
  } catch (err) {
    console.error('audit log error', err);
  }
}
