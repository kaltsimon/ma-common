function existsAndEnum(obj: any, key: string): boolean {
  return (
    Object.prototype.hasOwnProperty.call(obj, key) &&
    Object.prototype.propertyIsEnumerable.call(obj, key)
  );
}

function implementation<T>(obj: { [key: string]: T } | ArrayLike<T>): T[] {
  if (obj == null) {
    throw new TypeError(`Cannot convert undefined or null to object`);
  }

  var vals: T[] = [];
  for (var key in obj) {
    if (existsAndEnum(obj, key)) {
      vals.push(obj[key]);
    }
  }

  return vals;
}

function checkAndImplement() {
  if (typeof Object.values !== 'function') {
    Object.defineProperty(Object, 'values', {
      value: implementation,
    });
  }
}

checkAndImplement();
