render() {
  let routes = (
    <Switch>
      <Route
        path="/"
        exact
        render={props => (
          <LoginPage
            {...props}
            onLogin={this.loginHandler}
            loading={this.state.authLoading}
          />
        )}
      />
      <Route
        path="/signup"
        exact
        render={props => (
          <SignupPage
            {...props}
            onSignup={this.signupHandler}
            loading={this.state.authLoading}
          />
        )}
      />
      <Redirect to="/" />
    </Switch>
  );

  
  if (this.state.isAuth) {
    routes = (
      <Switch>
        <Route
          path="/"
          exact
          render={props => (
            <FeedPage userId={this.state.userId} token={this.state.token} />
          )}
        />
        <Route
          path="/:postId"
          render={props => (
            <SinglePostPage
              {...props}
              userId={this.state.userId}
              token={this.state.token}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Fragment>
      {this.state.showBackdrop && (
        <Backdrop onClick={this.backdropClickHandler} />
      )}
      <ErrorHandler error={this.state.error} onHandle={this.errorHandler} />
      <Layout
        header={
          <Toolbar>
            <MainNavigation
              onOpenMobileNav={this.mobileNavHandler.bind(this, true)}
              onLogout={this.logoutHandler}
              isAuth={this.state.isAuth}
            />
          </Toolbar>
        }
        mobileNav={
          <MobileNavigation
            open={this.state.showMobileNav}
            mobile
            onChooseItem={this.mobileNavHandler.bind(this, false)}
            onLogout={this.logoutHandler}
            isAuth={this.state.isAuth}
          />
        }
      />
      {routes}
    </Fragment>
  );
}


export default withRouter(App);