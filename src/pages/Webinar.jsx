import React, { useEffect, useRef, useState } from "react";
import ZegoExpressEngine from "zego-express-engine-webrtc";

const Webinar = () => {
    const [isJoined, setIsJoined] = useState(false);
    const videoRef = useRef(null);

    const APP_ID = "1907602911"; // Replace with your ZEGOCLOUD AppID
    const SERVER_SECRET = "6c996b4bf2e9601dc67930114653d538"; // Replace with your ZEGOCLOUD Server Secret
    const ROOM_ID = "WEBINAR_ROOM_123"; // Replace with your webinar room ID

    useEffect(() => {
        const initializeZego = async () => {
            const zg = new ZegoExpressEngine(APP_ID, SERVER_SECRET);

            // Join the room
            const token = zg.generateToken(ROOM_ID, "user_id", "user_name");
            const result = await zg.loginRoom(ROOM_ID, token, { userID: "user_id", userName: "user_name" });

            if (result) {
                setIsJoined(true);
                console.log("Joined room successfully");

                // Play the host's stream
                zg.on("roomStreamUpdate", async (roomID, updateType, streamList) => {
                    if (updateType === "ADD") {
                        const streamID = streamList[0].streamID;
                        const stream = await zg.startPlayingStream(streamID);
                        videoRef.current.srcObject = stream;
                    }
                });
            }
        };

        initializeZego();
    }, []);

    return (
        <div>
            <h1>Webinar Client Page</h1>
            {isJoined ? (
                <div>
                    <video ref={videoRef} autoPlay playsInline controls />
                </div>
            ) : (
                <p>Joining webinar...</p>
            )}
        </div>
    );
};

export default Webinar;