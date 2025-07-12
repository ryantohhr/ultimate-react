import { useState } from "react";

export default function FriendForm({ onAddFriend }) {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function toggleForm() {
    setFormIsOpen((formIsOpen) => !formIsOpen);
    resetForm();
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newFriend = {
      id: 100,
      name,
      image: imageUrl,
      balance: 0,
    };

    onAddFriend(newFriend);
    resetForm();
  }

  function resetForm() {
    setName("");
    setImageUrl("");
  }

  return (
    <>
      {formIsOpen ? (
        <>
          <form className="form form-add-friend">
            <label>👫Friend name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>🌄Image URL</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <button className="button" onClick={handleSubmit}>
              Add
            </button>
          </form>
          <button className="button" onClick={toggleForm}>
            Close
          </button>
        </>
      ) : (
        <button className="button" onClick={toggleForm}>
          Add friend
        </button>
      )}
    </>
  );
}
