import type { NextPage } from 'next'

const Login: NextPage = () => {
  return (
    <section>
      <script src="https://accounts.google.com/gsi/client" async defer></script>

      <section className='social-login-section' style={{
        'width': '25%'
      }}>
        <div
          id="g_id_onload"
          data-client_id="946242776728-hetk06u45drp07qrgohj4hbciq417p34.apps.googleusercontent.com"
          data-login_uri="https://order-manager-front.herokuapp.com"
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
      </section>
    </section>
  )
}

export default Login
