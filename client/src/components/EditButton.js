import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { Modal, Form, Header, Button, Icon, Message } from "semantic-ui-react";

import { EDIT_POST_MUTATION } from "../util/graphql";

function EditButton({ postId, body }) {
  const [openModal, setOpenModal] = useState(false);

  const [postContent, setPostContent] = useState(body);

  const onEditPostChange = (e) => {
    setPostContent(e.target.value);
  };

  const [editPostMutation, { data, loading, error }] = useMutation(
    EDIT_POST_MUTATION,
    {
      variables: {
        postId,
        body: postContent,
      },
    }
  );

  useEffect(() => {
    if (data) {
      setOpenModal(false);
    }
  }, data);

  return (
    <div>
      <Button
        as="div"
        color="red"
        floated="right"
        onClick={() => setOpenModal(true)}
      >
        <Icon name="edit" style={{ margin: 0 }} />
      </Button>

      {openModal && (
        <Modal as={Form} open={true} size="tiny">
          <Header icon="pencil" content="Edit your post" />
          <Modal.Content>
            <Form.TextArea
              required
              type="text"
              value={postContent}
              onChange={onEditPostChange}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button
              type="submit"
              color="red"
              icon="times"
              content="Close"
              onClick={() => {
                setOpenModal(false);
              }}
            />
            <Button
              type="submit"
              color="green"
              icon="save"
              content="Save"
              onClick={editPostMutation}
            />
          </Modal.Actions>
        </Modal>
      )}
    </div>
  );
}

export default EditButton;
