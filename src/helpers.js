export const getUser = async (ctx) => {
    const Authorization = ctx.request.get('Authorization');
    if (Authorization) {
        const jwtToken  = await jwt.verify(Authorization, process.env.JWT_SECRET);
        const current_time = Math.round(Date.now() / 1000);
        if ( jwtToken.exp < current_time) {
            throw new Error("Token Expired");
        }
        return jwtoken;
    }
    throw new AuthError()
};
