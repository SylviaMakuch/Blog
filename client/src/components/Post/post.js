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
import styled from "styled-components";

// import { likePost, deletePost } from "../../../actions/posts";

const Card = styled.div`
  background-color: #08080a73;
  height: 400px;
  width: 300px;
  border-radius: 25px;
  padding: 10px 15px;
`;

const Typography = styled.p`
  color: white;
`;

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <CardMedia image={post.selectedFile} title={post.title} />
      <div>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography gutterBottom variant="h5" component="h2">
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          //   onClick={() => dispatch(likePost(post._id))}
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
      </CardActions>
    </Card>
  );
};

export default Post;
