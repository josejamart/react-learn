import React, { useState } from "react";
import { setProfile } from "../../../../api/user"

function Profile(props) {

    const [userName, setUserName] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function postLogin() {
        try {
            const result = await setProfile(userName, email)
            if (result.status === 200) {
                setIsSuccess(true);
                setTimeout(() => {
                    props.onClose()
                }, 1000);
            } else {
                setIsError(true);
            }
        } catch {
            setIsError(true);
        }
    }

    return (
        <div>
            <div>
                <input
                    type="username"
                    value={userName}
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                    placeholder="User name"
                />
            </div>
            <div>
                <input
                    type="email"
                    value={email}
                    onChange={e => {
                        setEmail(e.target.value);
                    }}
                    placeholder="Email"
                />
                <button onClick={() => {
                    postLogin()
                }}>Save</button>

                <button onClick={() => {
                    props.onClose()
                }}>Cancel</button>
            </div>
            {isSuccess && <span>The username or email has been saved!</span>}
            {isError && <span>The username or email provided were incorrect!</span>}
        </div>
    );
}

export default Profile;