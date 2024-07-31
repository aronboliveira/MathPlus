export function isClickOutside(
  event: MouseEvent,
  dlgInBtn: Element,
): boolean[] {
  const rect = dlgInBtn.getBoundingClientRect();
  const {clientX, clientY} = event;
  return [
    clientX < rect.left,
    clientX > rect.right,
    clientY < rect.top,
    clientY > rect.bottom,
  ];
}
