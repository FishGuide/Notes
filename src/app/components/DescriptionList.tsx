interface Line {
  text: string;
  color?: string;
  value?: string;
}

interface DescriptionListProps {
  lines: Line[];
}

export function DescriptionList({ lines }: DescriptionListProps) {
  return (
    <div className="space-y-2">
      {lines.map((line, i) => (
        <div key={i} className="text-gray-600">
          {line.color ? (
            <span style={{ color: line.color, fontWeight: 'bold' }}>
              {line.text}
            </span>
          ) : (
            <span>{line.text}</span>
          )}
          {line.value && <span className="text-gray-500"> {line.value}</span>}
        </div>
      ))}
    </div>
  );
}
