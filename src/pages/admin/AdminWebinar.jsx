import React, { useEffect, useRef, useState } from "react";
import ZegoExpressEngine from "zego-express-engine-webrtc";

const AdminWebinar = () => {
    const [isStreaming, setIsStreaming] = useState(false);
    const videoRef = useRef(null);

    const APP_ID = "1907602911"; // Replace with your ZEGOCLOUD AppID
    const SERVER_SECRET = "6c996b4bf2e9601dc67930114653d538"; // Replace with your ZEGOCLOUD Server Secret
    const ROOM_ID = "WEBINAR_ROOM_123"; // Replace with your webinar room ID

    useEffect(() => {
        const initializeZego = async () => {
            const zg = new ZegoExpressEngine(APP_ID, SERVER_SECRET);

            // Join the room
            const token = zg.generateToken(ROOM_ID, "host_id", "host_name");
            const result = await zg.loginRoom(ROOM_ID, token, { userID: "host_id", userName: "host_name" });

            if (result) {
                console.log("Host joined room successfully");

                // Start streaming
                const localStream = await zg.createStream();
                videoRef.current.srcObject = localStream;
                await zg.startPublishingStream("host_stream_id", localStream);
                setIsStreaming(true);
            }
        };

        initializeZego();
    }, []);

    return (
        <div>
            <h1>Webinar Admin Page</h1>
            {isStreaming ? (
                <div>
                    <video ref={videoRef} autoPlay playsInline muted controls />
                </div>
            ) : (
                <p>Starting stream...</p>
            )}
        </div>
    );
};

export default AdminWebinar;