import React from 'react';
import './NewPost.styles.scss';
import { BsNutFill } from 'react-icons/bs';
import { FaBold, FaItalic, FaLink, FaQuoteRight } from 'react-icons/fa';
import {
  AiOutlineMore,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
} from 'react-icons/ai';

import { Link } from 'react-router-dom';

const iconList = [
  <FaBold key="Bold" />,
  <FaItalic key="Italic" />,
  <FaLink key="Link" />,
  <FaQuoteRight key="Quote" />,
  <AiOutlineOrderedList key="orderedList" />,
  <AiOutlineUnorderedList key="unorderedList" />,
];

const SignUp = (e) => {
  const [newPost, setNewPost] = React.useState({
    image: null,
    title: null,
    tags: null,
    content: null,
  });

  const handleNewPost = (e) => {
    try {
      e.preventDefault();
      const image = e.target[0].value.toString();
      const title = e.target[1].value.toString();
      const tags = e.target[2].value.toString();
      const content = e.target.querySelectorAll('textarea')[0].value;

      setNewPost({
        image,
        title,
        tags,
        content,
      });

      createPost(
        newPost.image,
        newPost.title,
        newPost.image,
        newPost.tags,
        newPost.content,
        (body) => {
          alert('POST SAVED SUCCESSFULLY');
          console.log(body);
          <Link to="/" />;
        }
      );
      <Link to="/" />;
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = (image, title, avatar, tags, contentText, funcion) => {
    const url = `http://localhost:8080/api/v1/posts/`;

    let today = new Date();
    let time = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    today = dd + '/' + mm + '/' + yyyy;
    //const tiempoActual = today;
    let datetime = new Date();
    const day = dd;
    const month = mm;
    const year = yyyy;

    let ID = '';
    let postID = `${time.getTime()}${time.getMilliseconds()}`;
    let updated = false;
    let counterReactions = 0;
    let counterComents = 0;
    let nameP = 'Ada Lovelace';

    //"user": {"_id": "626733df2f550c017fc2349d"}

    avatar =
      'https://api.binary-coffee.dev/uploads/Ada_Lovelace_Chalon_portrait_4d642eaf6a.jpeg';

    const post = {
      ID,
      postID,
      datetime,
      day,
      month,
      year,
      counterReactions,
      counterComents,
      image,
      title,
      avatar,
      tags,
      contentText,
      nameP,
      updated,
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((respuesta) => respuesta.json())
      .then((body) => funcion(body))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="body d-flex alig-items-center justify-content-center">
        <main>
          <div className="m-2 d-flex align-items-center justify-content-end justify-content-sm-between">
            <div className="d-flex align-items-center d-none d-sm-inline">
              <a>
                <img
                  width="50px"
                  className="me-2 d-none d-md-inline"
                  src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                  alt="DEV Community"
                />
              </a>
              Create Post
            </div>
            <div className="d-flex align-items-center">
              <button className="btn btnIcon ms-2 me-2">Edit</button>
              <button className="btn btnIcon ms-2 me-2">Preview</button>
              <button className="btn ms-2 me-2 p-0">
                <a>
                  <i className="bi bi-x-lg ms-1 me-1"></i>
                </a>
              </button>
            </div>
          </div>

          <div className="">
            <form
              onSubmit={handleNewPost}
              className="w-100 d-flex flex-column justify-content-center"
            >
              <div className="d-flex p-3 align-items-center justify-content-center">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <div className="bg-white card me-md-3">
                    <div className="p-4 justify-content-between">
                      <input
                        id="postImg"
                        type="url"
                        className="mb-3 p-2 rounded inputCoverImg"
                        placeholder="Add a cover image"
                      />
                      <h1 className="mt-3 mb-3 inputPostTitle">
                        <input
                          id="postTitle"
                          className="w-100 inputPostTitle"
                          type="text"
                          placeholder="New post title here..."
                          required
                        />
                      </h1>
                      <div className="d-flex mt-3">
                        <div id="tagsContainer" className="d-flex"></div>
                        <input
                          id="tagCreator"
                          type="text"
                          className="form-control p-1"
                          placeholder="Add up to 4 tags..."
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="iconsContainer p-1 w-100 d-flex align-items-center justify-content-around">
                        <ul
                          id="textFormating"
                          className="list group d-flex align-items-center justify-content-start justify-content-sm-start p-0 m-0"
                        >
                          {iconList.map((icon) => {
                            return (
                              <li key={`li_${icon}`} className=" p-0 btnIcon">
                                <button
                                  key={`button_${icon}`}
                                  type="button"
                                  className="btn"
                                >
                                  <h3
                                    key={`h_${icon}`}
                                    className="p-0 m-0 d-flex align-items-center"
                                  >
                                    {icon}
                                  </h3>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                        <button className="btn btnIcon">
                          <h2>
                            <AiOutlineMore />
                          </h2>
                        </button>
                      </div>
                      <div className="p-4">
                        <div className="form-floating">
                          <textarea
                            id="postTextContent"
                            className="form-control"
                            name="floatingTextarea"
                            required
                          ></textarea>
                          <label htmlFor="floatingTextarea">
                            Write your post content here...
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="buttonsContainer d-flex align-items-center justify-content-start mt-3 w-100">
                    <button type="submit" className="btn btn-primary me-2">
                      Publish
                    </button>
                    <button type="button" className="btn bottomBUtton">
                      <span>Save draft</span>
                    </button>
                    <button type="button" className="btn bottomBUtton">
                      <BsNutFill />
                    </button>
                    <button type="reset" className="btn bottomBUtton">
                      <span>Revert new changes</span>
                    </button>
                  </div>
                </div>

                <div id="TitleAid" className="d-none d-md-inline w-25">
                  <h5>Writing a Great Post Title</h5>
                  <ul>
                    <li>
                      Think of your post title as a super short (but
                      compelling!) description — like an overview of the actual
                      post in one short sentence.
                    </li>
                    <li>
                      Use keywords where appropriate to help ensure people can
                      find your post by search.
                    </li>
                  </ul>
                </div>

                <div id="TagsAid" className="d-none w-25">
                  <h5>Tagging Guidelines</h5>
                  <ul>
                    <li>Tags help people find your post.</li>
                    <li>
                      Think of tags as the topics or categories that best
                      describe your post.
                    </li>
                    <li>
                      Add up to four comma-separated tags per post. Combine tags
                      to reach the appropriate subcommunities.
                    </li>
                    <li>Use existing tags whenever possible.</li>
                    <li>
                      Some tags, such as “help” or “healthydebate”, have special
                      posting guidelines.
                    </li>
                  </ul>
                </div>

                <div id="ContentAid" className="d-none w-25">
                  <h5>Editor Basics</h5>
                  <ul>
                    <li>
                      Use <a>Markdown</a> to write and format posts.
                      <ul>
                        <li>Commonly used syntax</li>
                      </ul>
                    </li>
                    <li>
                      Embed rich content such as Tweets, YouTube videos, etc.
                      Use the complete URL:
                      <span className="rounded">
                        {'{% embed https://... %}.'}
                      </span>
                      <a>See a list of supported embeds.</a>
                    </li>
                    <li>
                      In addition to images for the post s content, you can also
                      drag and drop a cover image.
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default SignUp;
