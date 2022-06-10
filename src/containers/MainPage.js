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
import Tabs from '../components/subcomponents/Tabs';
import UserProfileHeader from '../components/UserProfileHeader';

import {
  createUser,
  emailPasswordSignIn,
} from '../firebase/auth-firebase';

import albumList from '../local_data/Users_Albums_0.json';
import artistList from '../local_data/Users_Artists_0.json';
import playlistList from '../local_data/Users_Playlists.json';
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

  let signInModalContents;
  let signUpModalContents;

  const moveToSignIn = () => {
    setModalHeader('Sign In');
    setModalContents(signInModalContents);
  };

  const moveToSignUp = () => {
    setModalHeader('Sign Up');
    setModalContents(signUpModalContents);
  };

  // TODO Show account created
  const signUpHandler = async (email, password) => {
    let error = null;
    await createUser(
      email,
      password,
      (user) => { // Success
        // Show account created
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
                firstUserImg="https://www.thispersondoesnotexist.com/image"
                firstUserName="Action B"
                secondUserImg="https://www.thispersondoesnotexist.com/image"
                secondUserName="Baction A"
                artistPercent="43"
                albumPercent="34"
                playlistPercent="2"
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
                  playlist={artistList}
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
                  playlist={albumList}
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
                  playlist={playlistList}
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
                  'https://www.thispersondoesnotexist.com/image',
                  'https://www.thispersondoesnotexist.com/image',
                  'https://www.thispersondoesnotexist.com/image',
                  'https://www.thispersondoesnotexist.com/image',
                  'https://www.thispersondoesnotexist.com/image',
                  'https://www.thispersondoesnotexist.com/image',
                  'https://www.thispersondoesnotexist.com/image',
                  'https://www.thispersondoesnotexist.com/image',
                ]}
                userNames={[
                  'Actionnnn Bronson',
                  'Bactionnnn Aronson',
                  'Cactionnnn Dronson',
                  'Dactionnnn Cronson',
                  'Ectionnnn Fronson',
                  'Factionnnn Eronson',
                  'Gactionnnn Hronson',
                  'Hactionnnn Gronson',
                ]}
                userIds={[
                  'Actionnnn Bronson',
                  'Bactionnnn Aronson',
                  'Cactionnnn Dronson',
                  'Dactionnnn Cronson',
                  'Ectionnnn Fronson',
                  'Factionnnn Eronson',
                  'Gactionnnn Hronson',
                  'Hactionnnn Gronson',
                ]}
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
              <UserProfileHeader
                imageSrc="https://www.thispersondoesnotexist.com/image"
                name="Name Person"
                infoText="Follow for the most rockinest bootsteppinest country!"
                numFollowers="5"
                isFollowing
              />
              <BasicPlaylist
                playlistHeader={<h3>Artists</h3>}
                showSearch
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
