const DEMO_STATE_KEY = 'demoState';

export function setDemoState(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(DEMO_STATE_KEY, serializedState);
  } catch (error) {
    console.error('Error saving demo state:', error);
  }
}

export function getDemoState() {
  try {
    const serializedState = localStorage.getItem(DEMO_STATE_KEY);
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading demo state:', error);
    return null;
  }
}

export function initializeState() {
  const currentState = getDemoState();
  if (currentState) {
    return;
  }
  setDemoState([]);

}

export function removeDemoState() {
  try {
    localStorage.removeItem(DEMO_STATE_KEY);
  } catch (error) {
    console.error('Error removing demo state:', error);
  }
}
