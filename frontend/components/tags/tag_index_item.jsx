import React from "react";

class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTag(this.props.tag);
    delete this.props;
  }

  render() {
    const { tag, currentUser, photo } = this.props;
    let deleteButton;
    if (currentUser.username === photo.ownername) {
      deleteButton = (
        <div className="delete-tag" onClick={this.handleDelete}>
          <i className="fa fa-minus-circle" aria-hidden="true" />
        </div>
      );
    }

    return (
      <div className="tag-item">
        <div className="tag-word">{tag.word}</div>
        <div className="delete-tag-word-button">{deleteButton}</div>
      </div>
    );
  }
}

export default TagIndexItem;
