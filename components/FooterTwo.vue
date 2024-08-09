<template>
	<div>
		<footer class="site-footer site-footer_two">
			<div class="site-footer_farm_image site-footer_two_img"><img
				src="assets/images/resources/site-footer-farm.png"
				alt="Farm Image"></div>
			<div class="container">
				<div class="row no-gutters">
					<div class="col-xl-4 col-lg-6 col-md-6">
						<div class="footer-widget__column footer-widget__about wow fadeInUp"
						     data-wow-delay="100ms">
							<div class="footer-widget__title">
								<h3>Address</h3>
							</div>
							<div class="footer-widget_about_text">
								<span>Meydan Free Zone</span>
								<br>
								<span>Meydan Grandstand, 6th Floor, Meydan Rd.</span>
								<br>
								<span>Nad Al Sheba 1, Dubai, UAE</span>
							</div>
						</div>
					</div>
					<div class="col-xl-5 col-lg-3 col-md-5">
						<div class="footer-widget__column footer-widget__link wow fadeInUp"
						     data-wow-delay="200ms">
							<div class="footer-widget__title">
								<h3>Explore</h3>
							</div>
							<ul class="footer-widget__links-list type2 list-unstyled">
								<li><a href="#">About Us</a></li>
								<li><a href="mailto:info@teneighteen.biz">Contact</a></li>
							</ul>
						</div>
					</div>
					<div class="col-xl-3 col-lg-3 col-md-3">
						<div class="footer-widget__column footer-widget__contact wow fadeInUp"
						     data-wow-delay="400ms">
							<div class="footer-widget__title">
								<h3>Contact</h3>
							</div>
							<div class="footer-widget_about_text">
								<p>info@teneighteen.biz</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>

		<div class="site-footer_bottom site-footer-bottom-two">
			<div class="container">
				<div class="site-footer_bottom_copyright">
					<p>@ All copyright {{ new Date().getFullYear() }}, <a href="#">teneighteen.biz</a></p>
				</div>
				<div class="site-footer_bottom_menu">
					<ul class="list-unstyled">
						<li><a href="/privacy">Privacy Policy</a></li>
						<li><a href="/terms">Terms of Use</a></li>
					</ul>
				</div>
			</div>
		</div>

		<a @click="scrollTop"
		   href="#"
		   class="scroll-to-target scroll-to-top"
		   :style="`display: ${scrollBtn ? 'block' : 'none'}`"><i class="fa fa-angle-up"></i></a>

	</div>
</template>

<script>
export default {
	name: "FooterTwo",
	data() {
		return {
			scrollBtn: false
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},

	methods: {

		handleScroll() {

			if (window.scrollY > 70) {
				this.scrollBtn = true
			} else if (window.scrollY < 70) {
				this.scrollBtn = false
			}
		},

		scrollTop() {
			window.scrollTo(0, 0);
		}

	}
}
</script>

<style scoped>

</style>
