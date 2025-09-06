export default function FloatingRibbons() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="floating-ribbon ribbon-1"></div>
      <div className="floating-ribbon ribbon-2"></div>
      <div className="floating-ribbon ribbon-3"></div>
    </div>
  );
}
