import React from "react";
import { withRouter } from "react-router-dom";
import TagIndexItem from "./tag_index_item";

class TagIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photo_id: this.props.match.params.photoId,
      word: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  componentDidMount() {
    this.props.getTags(parseInt(this.props.match.params.photoId));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postTag(this.state);
    this.setState({
      word: ""
    });
  }

  render() {
    const { tags, photo, deleteTag, currentUser } = this.props;

    const tagItems =
      tags &&
      tags.map(tag => (
        <TagIndexItem
          key={`tag${tag.id}`}
          tag={tag}
          currentUser={currentUser}
          photo={photo}
          deleteTag={deleteTag}
        />
      ));

    return (
      <div className="tag-index-container">
        <ul className="tag-index">{tagItems}</ul>
      </div>
    );
  }
}

export default withRouter(TagIndex);
