import { ApiProperty } from '@nestjs/swagger';

export namespace TTenant {
  export namespace DTO {
    export class TenantCustomization {}

    export class TenantFeatures {
      @ApiProperty()
      news: boolean;
      @ApiProperty()
      featured: boolean;
    }

    export class Tenant {
      @ApiProperty()
      id: string;
      @ApiProperty()
      name: string;
      @ApiProperty()
      url: string;
      @ApiProperty()
      logo: string;
      @ApiProperty({ type: TenantFeatures })
      features: TenantFeatures;
      @ApiProperty({ type: TenantCustomization })
      customization: TenantCustomization;
      @ApiProperty()
      created_at: string;
      @ApiProperty()
      updated_at: string;
    }
  }
}
