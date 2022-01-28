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
import styled, { createGlobalStyle } from "styled-components";
import importGoogleFonts from "import-google-fonts";

const GoogleFonts = importGoogleFonts(
  createGlobalStyle,
  ["Abril Fatface"],
  ["Aclonica"],
  ["Roboto"]
);

const Card = styled.div`
  background-color: #08080a73;
  height: 450px;
  width: 300px;
  border-radius: 25px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageFile = styled.img`
  height: 450px;
  width: 300px; 
  z-index: -1;
  position: absolute;
  border-radius: 25px;
`;

const Typography = styled.p`
  color: white;
`;

const CreatorTimeDiv = styled.div`
  display: flex;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Title = styled.h2`
font-style:'Roboto';
color: white;
text-align: center;
text-shadow: 2px 2px black; 
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
        <Typography variant="body2" color="textPrimary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <div>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardActions style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}{" "}
        </Button>
        <Button
          size="small"
          color="primary"
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
