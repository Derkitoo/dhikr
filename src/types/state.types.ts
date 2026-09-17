/**
 * Types pour la gestion rigoureuse des 3 états (loading, success, error)
 * et de l'état au repos (idle) sur l'ensemble des flux asynchrones et I/O.
 */

export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error';

export type AsyncState<T> =
  | { readonly status: 'idle'; readonly data: null; readonly error: null }
  | { readonly status: 'loading'; readonly data: T | null; readonly error: null }
  | { readonly status: 'success'; readonly data: T; readonly error: null }
  | { readonly status: 'error'; readonly data: T | null; readonly error: Error };

export function createIdleState<T>(): AsyncState<T> {
  return { status: 'idle', data: null, error: null };
}

export function createLoadingState<T>(previousData: T | null = null): AsyncState<T> {
  return { status: 'loading', data: previousData, error: null };
}

export function createSuccessState<T>(data: T): AsyncState<T> {
  return { status: 'success', data, error: null };
}

export function createErrorState<T>(error: Error, previousData: T | null = null): AsyncState<T> {
  return { status: 'error', data: previousData, error };
}
