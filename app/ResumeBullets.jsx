const Bullets = ({ content }) => (
  <ul style={{ listStyle: 'inside' }} className="mb-10">
    {content.map(bullet => <li key={bullet} className="mb-2 text-sm">{bullet}</li>)}
  </ul>
)

export default Bullets;
