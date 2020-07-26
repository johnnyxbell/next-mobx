import { observable, action, computed } from "mobx";

class Store {
  @observable likesCount = 0;

  @observable comments = ["Wow", "Dude that's sick as fuck"];

  @action increaseCount() {
    this.likesCount++;
  }
  @action decreaseCount() {
    this.likesCount--;
  }

  @action addComment(comment) {
    this.comments.push(comment);
  }

  @computed get commentsCount() {
    return this.comments.length;
  }
}

const storeInstance = new Store();
export default storeInstance;
