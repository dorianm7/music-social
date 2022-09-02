import PropTypes from 'prop-types';
import React, {
  useState,
} from 'react';
import { nanoid } from 'nanoid';

import './MainPage.css';

import AfterReportModalContents from '../../../components/modal-contents/AfterReportModalContents/AfterReportModalContents';
import BasicButton from '../../../components/basic/BasicButton/BasicButton';
import BasicPlaylist from '../../../components/BasicPlaylist/BasicPlaylist';
import CollaborativePlaylistPageContent from '../../page-contents/CollaborativePlaylistPageContents/CollaborativePlaylistPageContents';
import Comparison from '../../../components/Comparison/Comparison';
// import ConfirmEmailModalContents from
//   '../../../components/modal-contents/ConfirmEmailModalContents/ConfirmEmailModalContents';
import Footer from '../../../components/Footer/Footer';
import MainNav from '../../../components/MainNav/MainNav';
import Modal from '../../../components/modals/Modal/Modal';
import MusicLibrary from '../../../components/MusicLibrary/MusicLibrary';
import PlaylistHeader from '../../../components/PlaylistHeader/PlaylistHeader';
import ReportProfileForm from '../../../components/forms/ReportProfileForm/ReportProfileForm';
import SignInModalContents from '../../../components/modal-contents/SignInModalContents/SignInModalContents';
import SignUpModalContents from '../../../components/modal-contents/SignUpModalContents/SignUpModalContents';
import Tabs from '../../../components/subcomponents/Tabs/Tabs';
import Toast from '../../../components/Toast/Toast';
import UnderConstructionModalContents from '../../../components/modal-contents/UnderConstructionModalContents/UnderConstructionModalContents';
import UserProfileHeader from '../../../components/UserProfileHeader/UserProfileHeader';

import {
  userSignUp,
  emailPasswordSignIn,
  googleSignIn,
} from '../../../firebase/auth-firebase';

import albumList from '../../../local_data/Users_Albums_0.json';
import albumListReverse from '../../../local_data/Users_Albums_0_Reverse.json';
import artistList from '../../../local_data/Users_Artists_0.json';
import artistListReverse from '../../../local_data/Users_Artists_0_Reverse.json';
import playlistList from '../../../local_data/Users_Playlists.json';
import playlistListReverse from '../../../local_data/Users_Playlists_Reverse.json';
import usersList from '../../../local_data/users.json';
import playlist from '../../../local_data/Playlist_0.json';
import playlistReverse from '../../../local_data/Playlist_0_Reverse.json';
import {
  Icons,
} from '../../../Icons';

function MainPage(props) {
  const {
    // Toast Container HOC Props
    toastContainerClassName,
    toastVisible,
    toast,
    toastMessage,
    // Regular Props
    userSignedIn,
  } = props;
  // Modal states and functions
  const [modalHeader, setModalHeader] = useState('modal');
  const [modalContents, setModalContents] = useState(<span>Default</span>);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // States for feature sections
  // Playlist Select states
  const [compareArtistOrdering, setCompareArtistOrdering] = useState('Recent');
  const [compareAlbumOrdering, setCompareAlbumOrdering] = useState('Recent');
  const [comparePlaylistOrdering, setComparePlaylistOrdering] = useState('Recent');
  const [collabPlaylistOrdering, setCollabPlaylistOrdering] = useState('Recent');
  const [profilePlaylistOrdering, setProfilePlaylistOrdering] = useState('Recent');

  // Profile states
  const [isFollowingProfile, setIsFollowingProfile] = useState(true);
  const [showProfileCompatibility, setShowProfileCompatibility] = useState(false);

  let signInModalContents;
  let signUpModalContents;
  // let confirmEmailModalContents;
  let underConstructionModalContents;

  // Change modal functions
  const moveToSignIn = () => {
    setModalHeader('Sign In');
    setModalContents(signInModalContents);
  };

  const moveToSignUp = () => {
    setModalHeader('Sign Up');
    setModalContents(signUpModalContents);
  };

  // const moveToConfirmEmail = () => {
  //   setModalHeader('Confirm Email');
  //   setModalContents(confirmEmailModalContents);
  // };

  const moveToUnderConstruction = () => {
    setModalHeader('Under Construction');
    setModalContents(underConstructionModalContents);
  };

  // Modal form handlers

  // Sign in form handlers
  // TODO Move to App after sign in
  const signInHandler = async (email, password) => {
    let error = null;
    await emailPasswordSignIn(
      email,
      password,
      (user) => { //  Success
        // Move to App
        const noop = () => {};
        noop(user);
        moveToUnderConstruction();
      },
      (err) => { // Error
        error = err;
      },
    );

    if (error) {
      throw new Error(error);
    }
  };

  // TODO Move to App after sign in
  const googleSignInHandler = () => {
    const noop = () => {};
    googleSignIn(
      (user) => { // Success
        noop(user);
        moveToUnderConstruction();
      },
      (error) => { // Error
        noop(error);
      },
    );
  };

  // Sign up Form Handler
  const signUpHandler = async (email, password) => {
    let error = null;
    await userSignUp(
      email,
      password,
      () => { // Success
        // moveToConfirmEmail();
        moveToUnderConstruction();
      },
      (err) => { // Error
        error = err;
      },
    );

    if (error) {
      throw new Error(error);
    }
  };

  // Modal Contents
  signUpModalContents = (
    <SignUpModalContents
      formOnSubmit={signUpHandler}
      signInOnClick={() => moveToSignIn()}
    />
  );

  signInModalContents = (
    <SignInModalContents
      formOnSubmit={signInHandler}
      googleSignInOnClick={googleSignInHandler}
      signUpOnClick={() => moveToSignUp()}
    />
  );

  // confirmEmailModalContents = (
  //   <ConfirmEmailModalContents
  //     moveToSignInOnClick={moveToSignIn}
  //   />
  // );

  underConstructionModalContents = (
    <UnderConstructionModalContents />
  );

  // Component click handlers
  const navSignInClickHandler = () => {
    setModalHeader('Sign In');
    setModalContents(signInModalContents);
    toggleModal();
  };

  const openSignUpOnClick = () => {
    setModalHeader('Sign Up');
    setModalContents(signUpModalContents);
    toggleModal();
  };

  // TODO Add report submit functionality
  const openAfterReportModal = () => new Promise((resolve) => {
    setModalContents((
      <AfterReportModalContents />
    ));
    resolve();
  });

  const openReportProfileModal = (reportedUser) => {
    setModalHeader('Report');
    setModalContents((
      <ReportProfileForm
        reportedUsername={reportedUser}
        onSubmit={openAfterReportModal}
      />
    ));
    toggleModal();
  };

  // TODO Move to App
  const openApp = () => {};

  const APP_NAME = 'Music Social';
  const TOP_ID = 'top';
  const COMPARE_LIBRARIES_SECTION_ID = 'compare-libraries-section';
  const COLLAB_PLAYLISTS_SECTION_ID = 'collab-playlists-section';
  const FOLLOW_USERS_SECTION_ID = 'follow-users-section';
  const CONTACT_SECTION_ID = 'contact';
  const TAB_ITEMS = [
    <a
      key={nanoid()}
      href={`#${COMPARE_LIBRARIES_SECTION_ID}`}
    >
      Compare Libraries
    </a>,
    <a
      key={nanoid()}
      href={`#${COLLAB_PLAYLISTS_SECTION_ID}`}
    >
      Collab Playlists
    </a>,
    <a
      key={nanoid()}
      href={`#${FOLLOW_USERS_SECTION_ID}`}
    >
      Follow Users
    </a>,
  ];
  const PLAYLISTS_HEADING_TYPE = 'h3';
  const APP_DESCRIPTION_P1 = 'Tired from the lack of social features on'
    + ` the popular streaming platforms, ${APP_NAME} was made for`
    + ' making your music library a more social experience.';
  const APP_DESCRIPTION_P2 = 'Initially powered by Spotify, with plans to work with more streaming services'
    + ' in the future, use your account to compare your music'
    + ' library and share with others on the platform.';

  const navButtonOnClick = userSignedIn ? openApp : navSignInClickHandler;

  // Change order of playlists
  const compareArtistList = compareArtistOrdering === 'Recent'
    ? artistList
    : artistListReverse;

  const compareAlbumList = compareAlbumOrdering === 'Recent'
    ? albumList
    : albumListReverse;

  const comparePlaylistList = comparePlaylistOrdering === 'Recent'
    ? playlistList
    : playlistListReverse;

  const collabPlaylist = collabPlaylistOrdering === 'Recent'
    ? playlist
    : playlistReverse;

  const profileArtistList = profilePlaylistOrdering === 'Recent'
    ? artistList
    : artistListReverse;

  // Change number profile followers
  const profileNumFollowers = (isFollowingProfile)
    ? Number(usersList.users['002u'].num_followers)
    : (Number(usersList.users['002u'].num_followers) - 1);

  return (
    <>
      <div
        className={`main-page ${toastContainerClassName}`}
        id={TOP_ID}
      >
        <MainNav
          navText={APP_NAME}
          topHref={`#${TOP_ID}`}
          featuresHref={`#${COMPARE_LIBRARIES_SECTION_ID}`}
          contactHref={`#${CONTACT_SECTION_ID}`}
          buttonOnClick={navButtonOnClick}
          userSignedIn={userSignedIn}
        />
        <header className="app-intro">
          <img
            src="https://newyork-dailynews.com/wp-content/uploads/2017/10/Night-Clubs-in-New-York-City-1024x552.jpg"
            alt="Night club dance floor"
            className="hero-image"
            loading="lazy"
          />
          <h1>{APP_NAME}</h1>
          <p className="intro">
            {APP_DESCRIPTION_P1}
            <br />
            {APP_DESCRIPTION_P2}
          </p>
          <BasicButton
            onClick={openSignUpOnClick}
          >
            Try it today
          </BasicButton>
        </header>
        <main>
          <section
            id={COMPARE_LIBRARIES_SECTION_ID}
            className="feature"
          >
            <Tabs tabSelected={0}>
              {TAB_ITEMS}
            </Tabs>
            <div className="compare-feature">
              <h2>Compare Music Libraries</h2>
              <Comparison
                firstUserImg={usersList.users['000u'].profile_img}
                firstUsername={usersList.users['000u'].username}
                secondUserImg={usersList.users['001u'].profile_img}
                secondUsername={usersList.users['001u'].username}
                artistPercent={Number(usersList.users['000u'].comparisons['001u'].most_recent.artists_score)}
                albumPercent={Number(usersList.users['000u'].comparisons['001u'].most_recent.albums_score)}
                playlistPercent={Number(usersList.users['000u'].comparisons['001u'].most_recent.playlists_score)}
              />
              <MusicLibrary
                searchAriaLabel={`Search ${usersList.users['000u'].username} and ${usersList.users['001u'].username} combined library`}
              >
                <BasicPlaylist
                  type="artist"
                  playlistHeader={(
                    <PlaylistHeader
                      headingType={PLAYLISTS_HEADING_TYPE}
                      playlistName="Artists"
                      totalSongs={artistList.artists.total}
                      totalRunningTime={-1} // Default Value
                    />
                  )}
                  playlist={compareArtistList}
                  onSelectOptionClick={(option) => {
                    setCompareArtistOrdering(option);
                  }}
                />
                <BasicPlaylist
                  type="album"
                  playlistHeader={(
                    <PlaylistHeader
                      headingType={PLAYLISTS_HEADING_TYPE}
                      playlistName="Albums"
                      totalSongs={albumList.total}
                      totalRunningTime={-1} // Default Value
                    />
                  )}
                  playlist={compareAlbumList}
                  onSelectOptionClick={(option) => {
                    setCompareAlbumOrdering(option);
                  }}
                />
                <BasicPlaylist
                  type="playlist"
                  playlistHeader={(
                    <PlaylistHeader
                      headingType={PLAYLISTS_HEADING_TYPE}
                      playlistName="Playlists"
                      totalSongs={playlistList.total}
                      totalRunningTime={-1} // Default Value
                    />
                  )}
                  playlist={comparePlaylistList}
                  onSelectOptionClick={(option) => {
                    setComparePlaylistOrdering(option);
                  }}
                />
              </MusicLibrary>
            </div>
          </section>
          <section
            id={COLLAB_PLAYLISTS_SECTION_ID}
            className="feature"
          >
            <Tabs tabSelected={1}>
              {TAB_ITEMS}
            </Tabs>
            <div className="collaborative-feature">
              <h2>Collaborative Playlists</h2>
              <CollaborativePlaylistPageContent
                playlistHeadingType={PLAYLISTS_HEADING_TYPE}
                playlistName="Playlist"
                userImages={[
                  usersList.users['000u'].profile_img,
                  usersList.users['001u'].profile_img,
                  usersList.users['002u'].profile_img,
                  usersList.users['003u'].profile_img,
                  usersList.users['004u'].profile_img,
                  usersList.users['005u'].profile_img,
                  usersList.users['006u'].profile_img,
                  usersList.users['007u'].profile_img,
                ]}
                usernames={[
                  `${usersList.users['000u'].username}`,
                  `${usersList.users['001u'].username}`,
                  `${usersList.users['002u'].username}`,
                  `${usersList.users['003u'].username}`,
                  `${usersList.users['004u'].username}`,
                  `${usersList.users['005u'].username}`,
                  `${usersList.users['006u'].username}`,
                  `${usersList.users['007u'].username}`,
                ]}
                userIds={[
                  `${usersList.users['000u'].username}`,
                  `${usersList.users['001u'].username}`,
                  `${usersList.users['002u'].username}`,
                  `${usersList.users['003u'].username}`,
                  `${usersList.users['004u'].username}`,
                  `${usersList.users['005u'].username}`,
                  `${usersList.users['006u'].username}`,
                  `${usersList.users['007u'].username}`,
                ]}
                playlist={collabPlaylist}
                onPlaylistSelectOptionClick={(option) => {
                  setCollabPlaylistOrdering(option);
                }}
              />
            </div>
          </section>
          <section
            id={FOLLOW_USERS_SECTION_ID}
            className="feature"
          >
            <Tabs tabSelected={2}>
              {TAB_ITEMS}
            </Tabs>
            <div className="follow-feature">
              <h2>Follow Users</h2>
              {!showProfileCompatibility && (
                <UserProfileHeader
                  imageSrc={usersList.users['002u'].profile_img}
                  username={usersList.users['002u'].username}
                  userLink={usersList.users['002u'].profile_url}
                  infoText={usersList.users['002u'].profile_description}
                  numFollowers={profileNumFollowers}
                  numFollowing={Number(usersList.users['002u'].num_following)}
                  isFollowing={isFollowingProfile}
                  followButtonOnClick={() => {
                    setIsFollowingProfile(true);
                  }}
                  unfollowButtonOnClick={() => {
                    setIsFollowingProfile(false);
                  }}
                  shareOptionOnClick={() => {
                    toast('Link copied to clipboard', 4000);
                  }}
                  reportOptionOnClick={() => {
                    openReportProfileModal(usersList.users['002u'].username);
                  }}
                  checkCompatOnClick={() => {
                    setShowProfileCompatibility(true);
                  }}
                />
              )}
              {showProfileCompatibility && (
                <>
                  <BasicButton
                    className="profile-back-button transparent-background"
                    onClick={() => {
                      setShowProfileCompatibility(false);
                    }}
                    ariaLabel="Back to User Profile"
                  >
                    {Icons.BACK}
                  </BasicButton>
                  <Comparison
                    firstUserImg={usersList.users['006u'].profile_img}
                    firstUsername={usersList.users['006u'].username}
                    secondUserImg={usersList.users['002u'].profile_img}
                    secondUsername={usersList.users['002u'].username}
                    albumPercent={20}
                    artistPercent={40}
                    playlistPercent={23}
                  />
                </>
              )}
              <BasicPlaylist
                playlistHeader={<h3>Artists</h3>}
                type="artist"
                showSearch
                playlist={profileArtistList}
                onSelectOptionClick={(option) => {
                  setProfilePlaylistOrdering(option);
                }}
                searchAriaLabel={`Search ${usersList.users['002u'].username} artists`}
              />
            </div>
          </section>
          <section className="app-conclusion">
            <h2>{APP_NAME}</h2>
            <p className="conclusion">
              {APP_DESCRIPTION_P1}
              <br />
              {APP_DESCRIPTION_P2}
            </p>
            <BasicButton
              onClick={openSignUpOnClick}
            >
              Try it today
            </BasicButton>
          </section>
          <section id="contact" className="contact">
            <h2>Contact</h2>
            <address className="contact-content">
              {Icons.EMAIL}
              <span className="contact-info">
                Have any questions?
                <br />
                Contact the author on&nbsp;
                <a
                  href="https://www.linkedin.com/in/dorian-maldonado/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </span>
            </address>
          </section>
        </main>
        <Footer />
      </div>
      <Modal
        heading={modalHeader}
        contents={modalContents}
        closeHandler={toggleModal}
        open={modalOpen}
      />
      {toastVisible && (
        <Toast message={toastMessage} />
      )}
    </>
  );
}

MainPage.propTypes = {
  // Toast Container HOC Props
  toastContainerClassName: PropTypes.string,
  toastVisible: PropTypes.bool,
  toast: PropTypes.func,
  toastMessage: PropTypes.string,
  // Regular Props
  userSignedIn: PropTypes.bool,
};

MainPage.defaultProps = {
  toastContainerClassName: 'toast-container',
  toastVisible: false,
  toast: () => {},
  toastMessage: 'Toast message',
  userSignedIn: false,
};

export default MainPage;
