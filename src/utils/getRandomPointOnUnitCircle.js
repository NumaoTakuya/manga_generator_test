import Point from "./classes/Point";

export default function getPointOnUnitCircle(angle) {
  angle = angle ? angle : Math.random() * 2 * Math.PI;
  const x = Math.cos(angle);
  const y = Math.sin(angle);
  return new Point(x, y);
}
