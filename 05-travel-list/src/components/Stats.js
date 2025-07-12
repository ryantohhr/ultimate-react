export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to you packing list 🚀</em>
      </p>
    );
  }

  const total = items.length;
  const packed = items.reduce((acc, cur) => {
    if (cur.packed) {
      return ++acc;
    } else return acc;
  }, 0);
  const packedPercentage = Math.round((packed / total) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${total} items on your list, and you already packed ${packed} (${
              packedPercentage ? packedPercentage : 0
            }%)`}
      </em>
    </footer>
  );
}
