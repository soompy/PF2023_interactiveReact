import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClock,
  faComment,
} from "@fortawesome/free-regular-svg-icons";

export default function Detail({ post }) {
  return (
    <>
      <div className="inner">
        <section className="article-view-header">
          <h3 className="heading">{post.title}</h3>

          <div className="info-group">
            <article className="item">
              <ul className="infomation">
                <li>
                  <FontAwesomeIcon icon={faUser} />
                  <span className="show-for-sr"> 작성자</span> 닉닉넴
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} /> 2023.12.22 13:16
                </li>
                <li>
                  <FontAwesomeIcon icon={faComment} /> 댓글 0
                </li>
              </ul>
              <div className="font-scale">
                <button className="scaleBtn scale-down">가</button>
                <button className="scaleBtn scale-up">가</button>
              </div>
            </article>
          </div>
        </section>

        <section className="article-view-cont">
          <div>
            <figure className="photo-layout" data-type="photo">
              <div className="IMGFLOATING">
                <img alt="사진" src="https://source.unsplash.com/random" />
              </div>
              <figcaption>사진 내용</figcaption>
            </figure>
          </div>

          <p>{post.content}</p>
        </section>
      </div>
    </>
  );
}
