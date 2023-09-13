export default function Code({ method, className}: { method: string, className?: string }) {
  return (
    <div className={`text-stone-500 ${className}`}>
        <span className="text-sky-700">obay</span>.<span className="text-sky-700">{method}</span>();
    </div>
  );
}