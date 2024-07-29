import request from "../axios"


export const loginService = async (payload: number) => {
    const { data } = await request.post(
        `/api/v1/general/switch-to-commission/`,
        {
            box_type: 'mnp',
            box_id: payload,
        }
    )
    return data

}