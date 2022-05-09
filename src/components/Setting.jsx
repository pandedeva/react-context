import { UseAppContext } from "../context/app-context";

function Setting() {
  const [state, dispatch] = UseAppContext();

  return (
    <input
      type="text"
      placeholder="Change Name"
      onChange={(e) => {
        dispatch({
          type: "UPDATEUSER",
          payload: {
            // ambil seluruh value dari user, lalu ubah namenya saja
            ...state.user,
            name: e.target.value,
          },
        });
      }}
      // kalau data user.name nya tidak ada, kasi empty string
      value={state.user.name ?? ""}
    />
  );
}

export default Setting;
