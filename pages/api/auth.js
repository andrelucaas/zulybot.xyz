/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Axios from "axios"
import qs from 'qs'

export default async (req, res) => {
    // Send authentication request
    await Axios.post("https://discord.com/api/v8/oauth2/token", qs.stringify({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "authorization_code",
        code: req.body.code,
        redirect_uri: `${process.env.WEBSITE_URL}/auth/discord`,
        // scope: "identify",
    }), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    // Return
    res.statusCode = 200
    res.json({ redirect_to: "/" })
  }