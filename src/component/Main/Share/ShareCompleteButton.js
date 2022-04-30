//redux//
import { connect } from "react-redux";
import { AddData, Sharing } from "../../../redux/MainReducer";
import store from "../../../index";

const mapStateToProps = (state) => ({
  sharing: state.sharing,
});

const mapDispatchToProps = {
  Sharing,
  AddData,
};

const createPlaylist= () => {
  let ulink=document.querySelector('#root > div > div > div.Upper > div > div:nth-child(1) > div:nth-child(5) > input[type=text]');
  let tag=document.querySelectorAll('#root > div > div > div.Upper > div > div:nth-child(1) > div:nth-child(7) > input[type=text]');
  let tags=[];
  for(let t of tag){
    tags.push(t.value);
  }
  return {
    "id": 1,
    "name": "anony",
    "tags": tags,
    "songs": ulink,
  };
}

const ShareCompleteButton = () => {
  return (
    <div
      style={style.shareCompleteButton}
      onClick={() => {
        console.log(JSON.parse(JSON.stringify(store.getState().data)));
        store.dispatch(AddData(createPlaylist()));
        store.dispatch(Sharing(0));
      }}
    >
      <div style={style.shareCompleteButtonText}>나도 공유하기</div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareCompleteButton);

const style = {
  shareCompleteButton: {
    margin: "30px auto",
    width: "97%",
    height: "50px",
    backgroundColor: "skyblue",
    borderRadius: "100px",
    display: "flex",
    alignItems: "center",
  },
  shareCompleteButtonText: {
    color: "white",
    fontSize: "20px",
    margin: "0 auto",
  },
};
