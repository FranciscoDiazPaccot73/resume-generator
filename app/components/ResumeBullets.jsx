const Bullets = ({ content }) => (
  <ul className="mb-10" style={{ listStyle: 'inside' }}>
    {content.map((bullet) => (
      <li key={bullet} className="mb-2 text-sm">
        {bullet}
      </li>
    ))}
  </ul>
);

export default Bullets;
