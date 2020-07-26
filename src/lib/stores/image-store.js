import { action, observable, runInAction } from "mobx";

class ImageStore {
  @observable imageUrl = "";

  @action setImageUrl(url) {
    this.imageUrl = url;
  }

  @action async fetchImage() {
    const res = await fetch("https://dog.ceo/api/breed/pug/images/random");
    const data = await res.json();
    runInAction(() => {
      console.log(data);
      this.setImageUrl(data.message);
    });
  }
}

const imageStore = new ImageStore();
export default imageStore;
