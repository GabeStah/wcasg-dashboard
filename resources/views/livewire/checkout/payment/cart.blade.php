<div class="d-flex">
  <div class="w-50 m-2">
    @if($this->price > 0)
      <p>
        {{ __('controller.checkout.payment.cart.payment_info_required') }}
      </p>
    @else
      <p class="text-success">
        {{ __('controller.checkout.payment.cart.no_payment_info_required') }}
      </p>
    @endif
  </div>
  <ul class="w-50 m-2 list-group">
    <li class="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 class="my-0">{{ $plan->product()->name }}</h6>
        <small class="text-muted">{{ $plan->nickname }}</small>
      </div>
      <span class="text-muted">${{ $plan->basePrice() }}</span>
    </li>
    <li class="list-group-item d-flex justify-content-between bg-light">
      <div class="form-group mb-0">
        <label for="coupon_code">Promo Discount</label>
        <div class="input-group input-group-sm w-75">
          <input wire:model="coupon_code" type="text" class="form-control form-control-sm" id="coupon_code" name="coupon_code" aria-describedby="coupon-code-help" placeholder="CODE">
          <div class="input-group-append pointer">
            <span class="input-group-text" type="submit">
              @if($this->coupon_code)
                @if($this->isCouponValid())
                  <i class="fas fa-check-circle {{ $this->coupontextcolor }}"></i>
                @else
                  <i class="fas fa-exclamation-circle {{ $this->coupontextcolor }}"></i>
                @endif
              @else
                <i class="fas fa-plus-circle {{ $this->coupontextcolor }}"></i>
              @endif
            ️</span>
          </div>
        </div>
        <small id="coupon-code-help" class="form-text {{ $this->coupontextcolor }}">
          @if(isset($errors) && $errors->first('coupon_code'))
            {{ $this->couponstatus }}
          @else
            {{ $this->couponstatus }}
          @endif
        </small>
      </div>
      <span class="{{ $this->coupontextcolor }}">{{ $this->discount > 0 ? '-' : '' }}${{ $this->discount }}</span>
    </li>
    <li class="list-group-item d-flex justify-content-between">
      <span>Total ({{ isset($plan->currency) ? strtoupper($plan->currency) : 'USD' }})</span>
      <strong>${{ $this->price }}</strong>
    </li>
  </ul>
</div>
