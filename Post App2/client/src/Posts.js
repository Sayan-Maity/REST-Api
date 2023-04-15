import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [updatedPost, setUpdatedPost] = useState({});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get('http://localhost:3001/posts')
      .then((res) => {
        // console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }, []);

  const deletePost = (id) => {
    // console.log("Button clicked")

    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('Error', err);
      });

    window.location.reload();
  };

  const editPost = (post) => {
    // console.log(post);
    setUpdatedPost(post);
    handleShow();
  };

  const handleChange = (e) => {
    // console.log(post);
    setUpdatedPost((prev) => {
      const { name, value } = e.target;
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveUpdatedPost = () => {
    // console.log(updatedPost)
    axios
      .put(`http://localhost:3001/update/${updatedPost._id}`, updatedPost)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
    window.location.reload();
  };

  return (
    <div>
      <div className="posts">
        <h1>All Posts</h1>

        <button onClick={() => navigate(-1)}> Back </button>

        {/* Update Modal starts here !! */}

        <Modal show={show} onHide={handleClose} className="modal">
          <form className="">
            <input
              type="text"
              placeholder=""
              name="title"
              value={updatedPost.title ? updatedPost.title : ''}
              onChange={handleChange}
            />
            <textarea
              type="text"
              rows={8}
              placeholder=""
              name="description"
              value={updatedPost.description ? updatedPost.description : ''}
              onChange={handleChange}
            />
          </form>

          <div className="buttons">
            <button variant="secondary" onClick={handleClose}>
              Close
            </button>
            <button
              variant="primary"
              onClick={() => {
                saveUpdatedPost();
                handleClose();
              }}
            >
              Save Changes
            </button>
          </div>
        </Modal>

        {/* Update Modal ends here !! */}

        <div className="all-post-div">
          {posts.length > 0 ? (
            posts.map((post) => {
              return (
                <div className="single-post-div" key={post._id}>
                  <h3> {post.title}</h3>
                  <p>{post.description}</p>

                  <div className="buttons">
                    <button onClick={() => editPost(post)}>Edit</button>
                    <button onClick={() => deletePost(post._id)}>Trash</button>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              <p>No Posts Found...</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
