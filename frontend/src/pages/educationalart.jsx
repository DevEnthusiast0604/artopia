import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./pages_styling/educationalart.css";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import "@icon/themify-icons/themify-icons.css";
import ShareButtons from "../components/ShareButtons/sharebutton.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Educationalart = () => {
  const { scrollYProgress } = useScroll();

  // Example post data as an array
  const posts = [
    {
      id: 1,
      name: "Malm",
      userimg: "src/assets/profile_pics/girly1.jpg",
      username: "Amy Smith",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      attachment: [
        {
          type: "image",
          src: "src/assets/painting.jpg",
        },
      ],
      date: "June 2, 2018 19:00 PM",
    },
  ];

  const renderAttachment = (attachments) => {
    return attachments.map((attachment, index) => {
      switch (attachment.type) {
        case "image":
          return (
            <img
              key={index}
              src={attachment.src}
              alt="Attachment"
              style={{
                borderRadius: "15px",
                height: "auto",
                maxWidth: "fit-content",
                marginLeft: "250px",
              }}
            />
          );
        case "video":
          return (
            <video
              key={index}
              controls
              style={{
                borderRadius: "15px",
                height: "auto",
                maxWidth: "100%",
                marginLeft: "250px",
              }}
            >
              <source src={attachment.src} type="video/mp4" />
            </video>
          );
        case "audio":
          return (
            <audio key={index} controls style={{ marginLeft: "250px" }}>
              <source src={attachment.src} type="audio/mpeg" />
            </audio>
          );
        default:
          return null;
      }
    });
  };

  const comments = [
    {
      username: "Wraith",
      comment: "This is a comment",
      date: "june,2 2018 19:PM",
    },
    // Add more comments as needed
  ];

  return (
    <div className="artwisdom">
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
      >
        <Navbar />
        {/* New Post Input */}
        <div className="newpst-input">
          <form method="post">
            <textarea rows="2" placeholder="write something" id="textarea"></textarea>
            <div className="attachments">
              <ul>
                <li>
                  <label className="fileContainer">
                    <i className="material-icons">music_note</i>
                    <input type="file" />
                  </label>
                </li>
                <li>
                  <label className="fileContainer">
                    <i className="material-icons">image</i>
                    <input type="file" />
                  </label>
                </li>
                <li>
                  <label className="fileContainer">
                    <i className="material-icons">videocam</i>
                    <input type="file" />
                  </label>
                </li>
                <li>
                  <button type="submit" className="buttonpost">Post</button>
                </li>
              </ul>
            </div>
          </form>
        </div>

        {/* Post Box */}
        <div className="central-meta">
          <div className="user-post">
            {posts.map((post) => (
              <div key={post.id} className="friend-info">
                <figure>
                  <img src={post.userimg} alt="Profile" />
                </figure>
                <div className="friend-name">
                  <ins>
                    <Link to="/userprofile" className="friendname">
                      {post.username}
                    </Link>
                  </ins>
                  <span>published: {post.date}</span>
                </div>
                <div className="post-meta">
                  {renderAttachment(post.attachment)}
                  <div className="we-video-info">
                    <ul>
                      <li>
                        <span className="views" data-toggle="tooltip" title="views">
                          <i className="fa fa-eye"></i>
                          <ins>1.2k</ins>
                        </span>
                      </li>
                      <li>
                        <span className="comment" data-toggle="tooltip" title="Comments">
                          <i className="fa fa-comment"></i>
                          <ins>52</ins>
                        </span>
                      </li>
                      <li>
                        <span className="like" data-toggle="tooltip" title="like">
                          <i className="ti ti-heart"></i>
                          <ins>2.2k</ins>
                        </span>
                      </li>
                      <li>
                        <span className="dislike" data-toggle="tooltip" title="dislike">
                          <i className="ti ti-heart-broken"></i>
                          <ins>200</ins>
                        </span>
                      </li>
                      <li>
                        <ShareButtons />
                      </li>
                    </ul>
                  </div>
                  <div className="description">
                    <p>{post.description}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Comment Area */}
            <div className="coment-area">
              <ul className="we-comet">
                {comments.map((comment, index) => (
                  <li key={index}>
                    <ul>
                      <li>
                        <div className="comet-avatar">
                          <img src="src/assets/profile_pics/girly5.jpg" alt="Comment Avatar" />
                        </div>
                        <div className="we-comment">
                          <div className="coment-head">
                            <h5>
                              <Link to="/userprofile" className="friendname">
                                {comment.username}
                              </Link>
                            </h5>
                            <span>{comment.date}</span>
                          </div>
                          <p>{comment.comment}</p>
                        </div>
                      </li>
                    </ul>
                  </li>
                ))}
                <li className="post-comment">
                  <div className="comet-avatar">
                    <img src="src/assets/profile_pics/girly6.jpg" alt="Comment Avatar" />
                  </div>
                  <div className="post-comt-box">
                    <form method="post">
                      <textarea placeholder="Post your comment"></textarea>
                      <button type="submit">Post</button>
                    </form>
                  </div>
                </li>
              </ul> 
            </div> 
          </div>
        </div>
      </motion.div>
      <Footer/>

    </div>
  );
};

export default Educationalart;
