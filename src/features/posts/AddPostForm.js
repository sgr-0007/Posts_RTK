import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [userId, setUserId] = useState("");
    const users = useSelector(selectAllUsers);

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(e.target.value);

    const dispatch = useDispatch();
    const onSavePostClicked = (e) => {
        e.preventDefault();
        if (title && content && userId) {
            dispatch(
                postAdded(title, content, userId)
            );
            setTitle("");
            setContent("");
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {userOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" name="postContent" value={content}  onChange = {onContentChanged} />
        <button type="button" disabled={!canSave} onClick={onSavePostClicked}>Save Post</button>
      </form>
    </section>
  )
}


export default AddPostForm