import PropTypes from 'prop-types';
import React, { useState } from 'react';

import '../stylesheets/main-page.css';

import BasicButton from '../components/basic/BasicButton';
import BasicPlaylist from '../components/BasicPlaylist';
import CollaborativePlaylistPageContent from './page-contents/CollaborativePlaylistPageContents';
import Comparison from '../components/Comparison';
import Footer from '../components/Footer';
import MainNav from '../components/MainNav';
import Modal from '../components/modals/Modal';
import MusicLibrary from '../components/MusicLibrary';
import PlaylistHeader from '../components/PlaylistHeader';
import SignInModalContents from '../components/modals/contents/SignInModalContents';
import SignUpModalContents from '../components/modals/contents/SignUpModalContents';
import ConfirmEmailModalContents from '../components/modals/contents/ConfirmEmailModalContents';
import ReportProfileForm from '../components/forms/ReportProfileForm';
import Tabs from '../components/subcomponents/Tabs';
import UserProfileHeader from '../components/UserProfileHeader';

import {
  createUser,
  emailPasswordSignIn,
} from '../firebase/auth-firebase';

import albumList from '../local_data/Users_Albums_0.json';
import albumListReverse from '../local_data/Users_Albums_0_Reverse.json';
import artistList from '../local_data/Users_Artists_0.json';
import artistListReverse from '../local_data/Users_Artists_0_Reverse.json';
import playlistList from '../local_data/Users_Playlists.json';
import playlistListReverse from '../local_data/Users_Playlists_Reverse.json';
import usersList from '../local_data/users.json';
import playlist from '../local_data/Playlist_0.json';
import playlistReverse from '../local_data/Playlist_0_Reverse.json';
import { Icons } from '../Icons';

function Main(props) {
  const {
    modalContainerClassName,
    modalOpen,
    toggleHandler,
    userSignedIn,
  } = props;
  const [modalHeader, setModalHeader] = useState('modal');
  const [modalContents, setModalContents] = useState(<span>Default</span>);

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
  let confirmEmailModalContents;

  const moveToSignIn = () => {
    setModalHeader('Sign In');
    setModalContents(signInModalContents);
  };

  const moveToSignUp = () => {
    setModalHeader('Sign Up');
    setModalContents(signUpModalContents);
  };

  const moveToConfirmEmail = () => {
    setModalHeader('Confirm Email');
    setModalContents(confirmEmailModalContents);
  };

  // TODO Show account created
  const signUpHandler = async (email, password) => {
    let error = null;
    await createUser(
      email,
      password,
      () => { // Success
        // Show spinner while loading
        moveToConfirmEmail();
      },
      (err) => { // Error
        error = err;
      },
    );

    if (error) {
      throw new Error(error);
    }
  };

  signUpModalContents = (
    <SignUpModalContents
      formOnSubmit={signUpHandler}
      signInOnClick={() => moveToSignIn()}
    />
  );

  // TODO Move to App after sign in
  const signInHandler = async (email, password) => {
    let error = null;
    await emailPasswordSignIn(
      email,
      password,
      (user) => { //  Success
        // Move to App
        console.log(user);
      },
      (err) => { // Error
        error = err;
      },
    );

    if (error) {
      throw new Error(error);
    }
  };

  signInModalContents = (
    <SignInModalContents
      formOnSubmit={signInHandler}
      signUpOnClick={() => moveToSignUp()}
    />
  );

  confirmEmailModalContents = (
    <ConfirmEmailModalContents
      moveToSignInOnClick={moveToSignIn}
    />
  );

  const navSignInClickHandler = () => {
    setModalHeader('Sign In');
    setModalContents(signInModalContents);
    toggleHandler();
  };

  const openSignUpOnClick = () => {
    setModalHeader('Sign Up');
    setModalContents(signUpModalContents);
    toggleHandler();
  };

  const openReportProfileModal = (reportedUser) => {
    setModalHeader('Report');
    setModalContents((
      <ReportProfileForm
        reportedUsername={reportedUser}
      />
    ));
    toggleHandler();
  };

  // TODO Move to App
  const openApp = () => {
    window.alert('Open App onClick ');
  };

  const APP_NAME = 'Music Comparison';
  const COMPARE_LIBRARIES_SECTION_ID = 'compare-libraries-section';
  const COLLAB_PLAYLISTS_SECTION_ID = 'collab-playlists-section';
  const FOLLOW_USERS_SECTION_ID = 'follow-users-section';
  const CONTACT_SECTION_ID = 'contact';
  const TAB_ITEMS = [
    <a href={`#${COMPARE_LIBRARIES_SECTION_ID}`}>
      Compare Libraries
    </a>,
    <a href={`#${COLLAB_PLAYLISTS_SECTION_ID}`}>
      Collab Playlists
    </a>,
    <a href={`#${FOLLOW_USERS_SECTION_ID}`}>
      Follow Users
    </a>,
  ];
  const PLAYLISTS_HEADING_TYPE = 'h3';
  const APP_DESCRIPTION_P1 = 'Tired from the lack of social features on'
    + ' the popular streaming platforms, Music Comparison was made for'
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
    ? usersList.users['002u'].num_followers
    : (Number(usersList.users['002u'].num_followers) - 1);

  const profileShareButtonOnClick = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {})
      .catch(() => {
        window.alert('Couldnt copy profile link');
      });
  };

  return (
    <>
      <div
        className={`main-page ${modalContainerClassName}`}
      >
        <MainNav
          navText={APP_NAME}
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
                firstUserName={usersList.users['000u'].username}
                secondUserImg={usersList.users['001u'].profile_img}
                secondUserName={usersList.users['001u'].username}
                artistPercent={usersList.users['000u'].comparisons['001u'].most_recent.artists_score}
                albumPercent={usersList.users['000u'].comparisons['001u'].most_recent.albums_score}
                playlistPercent={usersList.users['000u'].comparisons['001u'].most_recent.playlists_score}
              />
              <MusicLibrary>
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
                userNames={[
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
                  name={usersList.users['002u'].username}
                  infoText={usersList.users['002u'].profile_description}
                  numFollowers={profileNumFollowers}
                  numFollowing={usersList.users['002u'].num_following}
                  isFollowing={isFollowingProfile}
                  followButtonOnClick={() => {
                    setIsFollowingProfile(true);
                  }}
                  unfollowButtonOnClick={() => {
                    setIsFollowingProfile(false);
                  }}
                  shareOptionOnClick={() => {
                    profileShareButtonOnClick(usersList.users['002u'].profile_url);
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
                  >
                    {Icons.BACK}
                  </BasicButton>
                  <Comparison
                    firstUserImg={usersList.users['006u'].profile_img}
                    firstUserName={usersList.users['006u'].username}
                    secondUserImg={usersList.users['002u'].profile_img}
                    secondUserName={usersList.users['002u'].username}
                    albumPercent="20"
                    artistPercent="40"
                    playlistPercent="23"
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
      {modalOpen && (
        <Modal
          heading={modalHeader}
          contents={modalContents}
          closeHandler={toggleHandler}
        />
      )}
    </>
  );
}

Main.propTypes = {
  modalContainerClassName: PropTypes.string,
  modalOpen: PropTypes.bool,
  toggleHandler: PropTypes.func,
  userSignedIn: PropTypes.bool,
};

Main.defaultProps = {
  modalContainerClassName: 'modal-container',
  modalOpen: false,
  toggleHandler: () => console.log('Modal toggled'),
  userSignedIn: false,
};

export default Main;
