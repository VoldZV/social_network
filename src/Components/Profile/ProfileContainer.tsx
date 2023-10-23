import React from "react";
import {ProfilePageType} from "../redux/stateType";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {ProfileClassComponent} from "./ProfileClassComponent";
import {addPost, changeTextariaValue, getUserProfileTC} from "../redux/reducers/ProfileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {WithAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";


type TmstpProfile = ProfilePageType & {authUserId: number | null}

const mstpProfile = (state: AppStateType): TmstpProfile => ({
    postsData: state.profilePage.postsData,
    user: state.profilePage.user,
    authUserId: state.auth.id,
    textariaPostValue: state.profilePage.textariaPostValue
})

type TmdtpProfile =  {
    addPost: () => void,
    getUserProfileTC: (userId: number) => void,
    changeTextariaValue: (textValue: string) => void
    // setUsers: (users: UserType[]) => void
    // toggleFollow: (userId: number) => void
    // setTotalCount: (totalCount: number) => void
    // setCurrentPage: (totalCount: number) => void
    // toggleIsLoading: () => void
}

const mdtpProfile: TmdtpProfile = {
    addPost,
    getUserProfileTC,
    changeTextariaValue
}


// withRouter HOC is empty in rrd 6.14.2
//
export interface WithRouterProps {
    location: ReturnType<typeof useLocation>;
    params: Record<'userId', string>;
    navigate: ReturnType<typeof useNavigate>;
}
export const withRouter = <Props extends WithRouterProps>(
    Component: React.ComponentType<Props>
) => {
    return (props: Omit<Props, keyof WithRouterProps>) => {
        const location = useLocation();
        const params = useParams();
        const navigate = useNavigate();

        return (
            <Component
                {...(props as Props)}
                location={location}
                params={params}
                navigate={navigate}
            />
        );
    };
};

export type Tprofile = TmstpProfile & TmdtpProfile & WithRouterProps

export const ProfileContainer = compose<React.ComponentType>(connect(mstpProfile, mdtpProfile), withRouter,WithAuthRedirect<Tprofile>)(ProfileClassComponent)