export default function LoginWithGoogle() {
  return (
    <div>
      <script src="https://accounts.google.com/gsi/client" async defer/>
      <div
          id="g_id_onload"
          data-client_id="946242776728-hetk06u45drp07qrgohj4hbciq417p34.apps.googleusercontent.com"
          // data-login_uri="https://order-manager-front.herokuapp.com"
          data-auto_prompt="false">
      </div>
      <div
          className="g_id_signin"
          data-type="standard"
          data-size="large"
          data-theme="filled_blue"
          data-text="continue_with"
          data-shape="rectangular"
          data-logo_alignment="left">
      </div>
    </div>
  );
}