import { Card, Icon, Image, Label, Button, Popup } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import LikeButton from "./LikeButton.js";
import DeleteButton from "./DeleteButton.js";
import MyPopup from "../util/MyPopup";
import EditButton from "./EditButton.js";

function PostCard({
  post: { body, createdAt, id, username, likes, likesCount, commentsCount },
}) {
  const { user } = useContext(AuthContext);

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LikeButton user={user} post={{ id, likes, likesCount }} />
        <MyPopup content="Comment on post">
          <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
            <Button color="blue" basic>
              <Icon name="comments" />
              Comments
            </Button>
            <Label basic color="teal" pointing="left">
              {commentsCount}
            </Label>
          </Button>
        </MyPopup>
        <div style={{ margin: 10 }}>
          {user && user.username === username && (
            <EditButton postId={id} body={body} />
          )}
          {user && user.username === username && <DeleteButton postId={id} />}
        </div>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
