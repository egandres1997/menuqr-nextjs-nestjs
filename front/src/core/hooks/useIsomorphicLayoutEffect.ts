import { useEffect, useLayoutEffect } from 'react';

const isServer = typeof window === 'undefined';

export const useIsomorphicLayoutEffect = isServer ? useEffect : useLayoutEffect;
