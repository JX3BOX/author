import { $next, $team } from "./axios";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import axios from "axios";

function getDouyu(ids) {
    return $next().get("/team/douyu", {
        params: {
            tv_id: ids,
        },
    });
}

function getUserMedals(uid) {
    return $next().get("/api/user/" + uid + "/medals");
}

function getFrames() {
    return axios.get(__imgPath + "data/user_avatar_frame.json");
}

function getUserPublicTeams(uid) {
    return $team({ mute: true })
        .get(`/api/team/relation/public`, {
            params: {
                uid: uid,
            },
        })
        .then((res) => {
            return res.data.data;
        });
}
/**
 * 拉黑用户
 * @param {*} userId 用户id
 */
function deny(userId) {
    return $next().post(`/api/my-userlist/deny/${userId}`)
}

/**
 * 取消拉黑用户
 * @param {*} userId 用户id
 */
function undeny(userId) {
    return $next().delete(`/api/my-userlist/deny/${userId}`)
}
/**
 * 获取黑名单列表
 * @param {*} params 查询参数
 * @param {*} params.pageIndex 分页参数
 * @param {*} params.pageSize 分页参数
 * @param {*} params.user_id 用户id
 * @param {*} params.display_name 用户昵称
 * @returns
 */
function getBlackList(params) {
    return $next().get("/api/my-userlist/deny", {
        params
    });
}
export { getDouyu, getUserMedals, getFrames, getUserPublicTeams,deny,undeny,getBlackList };
