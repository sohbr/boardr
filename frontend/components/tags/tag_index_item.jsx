import React from "react";

class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTag(this.props.tag);
    delete this.props;
  }

  render() {
    const { tag, currentUser, photo } = this.props;
    let deleteButton;

    if (currentUser.id === photo.user_id) {
      deleteButton = (
        <div className="delete-tag" onClick={this.handleDelete}>
          <i className="fa fa-minus-circle" aria-hidden="true" />
        </div>
      );
    }

    return (
      <div className="tag-item">
        <div>{tag.name}</div>
        {deleteButton}
      </div>
    );
  }
}

export default TagIndexItem;
