import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer.jsx";
import "./pages_styling/userprofile.css";
import Navbar from "../components/Navbar/Navbar";
import ShareButtons from "../components/ShareButtons/sharebutton.jsx";
import { Link, useParams } from "react-router-dom";
import AxiosInstance from "./Axios/AxiosInstance.jsx";
import ProfileCustom from "./profile_customization/profilecustom.jsx";
import Popup from "reactjs-popup";

const Userprofile = () => {

  const { userId } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchProfile = async () => {
          try {
              console.log(`Fetching profile for userId: ${userId}`);
              const response = await AxiosInstance.get(`profile/${userId}/`);
              console.log(`Profile fetched: `, response.data);
              setProfile(response.data);
          } catch (error) {
              console.error("Error fetching profile:", error);
              setError(error.message || "Error fetching profile!");
          } finally {
              setLoading(false);
          }
      };

      fetchProfile();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const userss = [
    {
      id: 1,
      name: "frere",
      description: "retard",
      userimg: "src/assets/profile_pics/girly1.jpg",
    },
  ];

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
      date: "June 2, 2018 19:00 PM",
    },
    // Add more comments as needed
  ];

  return (
    <div>
      <Navbar />
      
        <div className="container-fluid overcover" >
          <div className="container profile-box">
            <div className="top-cover">
              <div className="covwe-inn">
                <div className="img-c">
                  <img src={profile.image} alt="Profile" />
                </div>
                <Popup
                    trigger={
                      <button className="buttonpopupou">
                        <img className="buttonimg" src="src/assets/plus.png" />
                      </button>
                    }
                    modal
                    contentStyle={{
                      backgroundColor: "#D492DC",
                      padding: "20px",
                      borderRadius: "10px",
                      zIndex: "1000",
                      width: "30%",
                      height: "750px"
                    }}
                  > <ProfileCustom/></Popup>
                <div className="tit-det">
                
                  <h2>{profile.username}</h2>
                  
                  <p>{profile.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/*Post Box */}
      <div className="central-metaaa">
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
                      <span
                        className="views"
                        data-toggle="tooltip"
                        title="views"
                      >
                        <i className="fa fa-eye"></i>
                        <ins>1.2k</ins>
                      </span>
                    </li>
                    <li>
                      <span
                        className="comment"
                        data-toggle="tooltip"
                        title="Comments"
                      >
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
                      <span
                        className="dislike"
                        data-toggle="tooltip"
                        title="dislike"
                      >
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
                        <img
                          src="src/assets/profile_pics/girly5.jpg"
                          alt="Comment Avatar"
                        />
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
                  <img
                    src="src/assets/profile_pics/girly6.jpg"
                    alt="Comment Avatar"
                  />
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
      <Footer />
    </div>
  );
};

export default Userprofile;
