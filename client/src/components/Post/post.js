import React from "react";
import {
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { likePost, deletePost } from "../../actions/post";
import styled from "styled-components";

const Card = styled.div`
  background-image: linear-gradient(to bottom, #ff000000 , #000000e0);
  height: 480px;
  width: 350px;
  border-radius: 25px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* &:hover {
    transform: translateY(-10px);
     background-image: linear-gradient(to bottom, #ff000000 , #000000e0);
  } */
`;

const ImageFile = styled.img`
  height: 480px;
  width: 350px;
  z-index: -1;
  position: absolute;
  border-radius: 25px;
`;

const Typography = styled.p`
  color: white;
  font-family: 'Rubik', sans-serif;
  text-align: center;
`;
const Message = styled.p`
  color: white;
  font-family: 'Rubik', sans-serif;
`;

const CreatorTimeDiv = styled.div`
  display: flex;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Title = styled.h2`
  font-family: "Abril Fatface";
  color: white;
  text-align: center;
  text-shadow: 2px 2px black;
  font-size: 25px;
  letter-spacing: 0.8px;
`;

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <ImageFile src={post.selectedFile} title={post.title} />
      <CreatorTimeDiv>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </CreatorTimeDiv>
      <div></div>
      <Title>{post.title}</Title>
      <CardContent>
        <Message>
          {post.message}
        </Message>
      </CardContent>
      <div>
        <Typography variant="body2" style={{color: "#8947ef"}} component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardActions style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          size="small"
          style={{color: "#8947ef"}}
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}{" "}
        </Button>
        <Button
          size="small"
          style={{color: "#8947ef"}}
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
