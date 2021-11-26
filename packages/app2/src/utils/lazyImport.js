import { lazy } from 'react';

export function lazyImport(factory, name) {
  console.log({ factory, name });
  return Object.create({
    [name]: lazy(() => factory().then((module) => ({ default: module[name] }))),
  });
}
